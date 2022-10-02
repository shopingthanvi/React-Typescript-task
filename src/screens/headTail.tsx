import React, { useEffect, useState } from 'react';
import { HandT } from '../utils/comman';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../store/index';
import { Header, SelectInput, Button } from '../components';
import { useNavigate } from 'react-router-dom';

interface Item {
    value: string;
    rowValue: string
}
interface Items {
    items: Item[]
}
interface PropsReduxState {
    state: Items
}

const About: React.FC = () => {
    let navigate = useNavigate();
    const [value, setValue] = useState<string>()
    const [error, setError] = useState<boolean>(false)
    const select = useSelector((state: PropsReduxState) => state)
    const dispatch = useDispatch()


    useEffect(()=>{
        const users = JSON.parse(sessionStorage.getItem("data") || "[]");
        users?.map((data:Item)=>{
            return dispatch(add(data))
           
        })
    },[])

    const onFormSubmit = () => {
        let getDataFromLocalStroage=JSON.parse(sessionStorage.getItem("data")|| '[]')
        if (select.state.items.length > 0) {
            const length = select.state.items.length
            const item = select.state.items[length - 1]
            if (item?.value === value) {
                const object = {
                    rowValue: item.rowValue,
                    value: value
                }
                dispatch(add(object))
                getDataFromLocalStroage.push(object)
            } else {
                const object = {
                    rowValue: item.rowValue + 1,
                    value: value
                }
                dispatch(add(object))
                getDataFromLocalStroage.push(object)
            }
        } else {
            const object = {
                rowValue: 1,
                value: value
            }
            dispatch(add(object))
            getDataFromLocalStroage.push(object)
        }
        setValue('')
        sessionStorage.setItem("data", JSON.stringify(getDataFromLocalStroage));
    }



    const groupData = select?.state?.items.reduce(function (acc: any, obj: Item) {
        let key = obj["rowValue"];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});


    const checkValue = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (value) {
            onFormSubmit()
        }else{
            setError(true)
        }
    }

    return (
        <div>
            <Header label={"Back"} onLabelClick={() => {
                navigate(-1)
            }} />
            <form onSubmit={checkValue} className="c-form">
                <SelectInput
                    value={value}
                    options={HandT}
                    className="c-form__input"
                    onChange={(event: React.FormEvent<HTMLSelectElement>) => {
                        const value: string = event.currentTarget.value;
                        setValue(value)
                        setError(false)

                    }} />
                <Button type="submit" />
                {error && <p className="c-form__error">Please select value from dropdown</p>}
            </form>

            <div style={{
                display: "flex"
            }}>

            </div>
            <div>{Array.from(Object.keys(groupData), k => groupData[k]).length > 0 ?
                <div style={{
                    display: "flex",
                    justifyContent:"center"
                }}>
                    {Array.from(Object.keys(groupData), k => groupData[k]).map((data, index) => {
                        return (
                            <div key={index} style={{
                                marginRight: "10px"
                            }}>
                                {data.map((task: Item, index: number) => {
                                    return (
                                        <div key={index}>
                                            <h2> {task.value}</h2>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                : ""}
            </div>

        </div>
    );
}

export default About;