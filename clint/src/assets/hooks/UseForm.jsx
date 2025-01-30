import { useState } from "react"

const useForm=(initialValue)=>{
    const [form,setForm] =useState(initialValue);
    const handleChange=(event)=>{
        const{name,value}=event.target
        setForm((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const resetForm=()=>setForm(initialValue)
    return{form,setForm,resetForm,handleChange}
}
export default useForm