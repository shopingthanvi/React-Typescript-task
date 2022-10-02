import React, { useState } from 'react';
import { HandT } from '../utils/comman';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../store/index';
import { Header, SelectInput,Button } from '../components';
import { useNavigate } from 'react-router-dom';


// interface PropsState{
// counterme?:[]
// }

const About: React.FC = () => {
    let navigate = useNavigate();
    const [value, setValue] = useState<string>()
    const [error, setError] = useState<string>()
    const select = useSelector((state: any) => state)
    const dispatch = useDispatch()

console.log("selectselectselect",select)
    const onFormSubmit = () => {
        if (select.counterme.people.length > 0) {
            const length = select.counterme.people.length
            const item = select.counterme.people[length - 1]
            if (item?.value === value) {
                const object = {
                    rowValue: item.rowValue,
                    value: value
                }
                dispatch(add(object))
            } else {
                const object = {
                    rowValue: item.rowValue + 1,
                    value: value
                }
                dispatch(add(object))
            }
        } else {
            const object = {
                rowValue: 1,
                value: value
            }
            dispatch(add(object))
        }
        setValue('')

    }

    const groupData = select?.counterme?.people.reduce(function (acc: any, obj: any) {
        let key = obj["rowValue"];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});


    const checkValue = (e: any) => {
        e.preventDefault()
        if (value) {
            console.log("errorerror", value)
            onFormSubmit()
        } else {
            console.log("errorerror", value)
            setError("Show Error")
        }

    }

    console.log("value")
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
                        setError('')

                    }} />
                    <Button type="submit"/>

                {/* <input type="submit" className="c-form__button" /> */}
                {error && <p className="c-form__error">Please select value from dropdown</p>}
            </form>

            <div style={{
                display: "flex"
            }}>

            </div>
            <div>{Array.from(Object.keys(groupData), k => groupData[k]).length > 0 ?
                <div style={{
                    display: "flex"
                }}>
                    {Array.from(Object.keys(groupData), k => groupData[k]).map((data, index) => {
                        return (
                            <div key={index} style={{
                                marginRight: "10px"
                            }}>
                                {data.map((task: any, index: any) => {
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