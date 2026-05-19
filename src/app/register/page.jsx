"use client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const onSubmit = async(e) => {
    e.preventDefault()
    const formData  = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries())
    const { data, error } = await authClient.signUp.email({
        email: user.email, 
        password: user.password, 
        name: user.name, 
        image: user.image, 
    })
    if(data){
      redirect('/')
    }
    if(error){
      toast.error('Registration Failed please try again later!');
    }
  }
    return (
        <div>
             <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4 card card-body shadow-2xl mx-auto my-20" >
      <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>name</Label>
        <Input placeholder="Enter Your Name" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="image"
        type="url"
      >
        <Label>Image Url</Label>
        <Input placeholder="Enter Your Image Url" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={6}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
        <Button className="w-full " type="submit">
         Register
        </Button>
      
    </Form>
        </div>
    );
};

export default RegisterPage;