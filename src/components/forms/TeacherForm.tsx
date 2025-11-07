"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";

const schema = z.object({
    username: z.string().min(3, { message: "Le nom doit avoir au moins 3 caractères!" }),
    email: z.string().email({ message: "L'adresse email n'est pas valide!" }),
    password: z.string().min(8, { message: "Le mot de passe contenir au moins 8 caractères!" }),
    firstname: z.string().min(1, { message: "Le prénom est requis!" }),
    lastname: z.string().min(1, { message: "Le nom est requis!" }),
    phone: z.string().min(1, { message: "Le numéro de téléphone est requis!" }),
    address: z.string().min(1, { message: "L'adresse est requise!" }),
    bloodType: z.string().min(1, { message: "Le groupe sanguin est requis!" }),
    birthday: z.date({ message: "La date de naissance est requise!" }),
    sex: z.enum(["male", "female"], { message: "Le sexe est requis!" }),
    img: z.instanceof(File, { message: "L'image de profil est requise!" })
    // anyOtherOptionalField: z.string().optional()
})

type Inputs = z.infer<typeof schema>

const TeacherForm = ({ type, data }: {
    type: "create" | "update";
    data?: any;
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(schema) });

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return (
        <form className="flex flex-col gap-8"
            onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">{type === "create" ? "Create a new teacher" : "Edit teacher's info"}</h1>
            <span className="text-xs text-gray-400 font-medium">Authentication Information</span>

            <div className="flex justify-between flex-wrap gap-4">

                <InputField label="Username" name="username" defaultValue={data?.username} register={register} error={errors?.username} />

                <InputField label="Email" name="email" type="email" defaultValue={data?.email} register={register} error={errors?.email} />

                <InputField label="Password" name="password" type="password" defaultValue={data?.password} register={register} error={errors?.password} />

            </div>

                <span className="text-xs text-gray-400 font-medium">Personal Information</span>

            <div className="flex justify-between flex-wrap gap-4">
                <InputField label="First name" name="firstname" defaultValue={data?.firstname} register={register} error={errors?.firstname} />

                <InputField label="Last name" name="lastname" defaultValue={data?.lastname} register={register} error={errors?.lastname} />

                <InputField label="Phone number" name="phone" defaultValue={data?.phone} register={register} error={errors?.phone} />

                <InputField label="Address" name="address" defaultValue={data?.address} register={register} error={errors?.address} />

                <InputField label="Blood Type" name="bloodType" defaultValue={data?.bloodType} register={register} error={errors?.bloodType} />

                <InputField label="Birthday" name="birthday" type="date" defaultValue={data?.birthday} register={register} error={errors?.birthday} />

            </div>

            <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">{type === "create" ? "Create" : "Update"}</button>
        </form>
    )
}

export default TeacherForm