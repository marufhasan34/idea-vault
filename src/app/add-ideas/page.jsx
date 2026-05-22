'use client'
import { FieldError, Input, Label, TextField,Select, ListBox, TextArea, Button } from '@heroui/react';
import React from 'react';

const AddIdeasPage = () => {

   const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const idea = Object.fromEntries(formData.entries())
    console.log(idea)
    const res = await fetch('http://localhost:5000/ideas',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(idea)
    })
    const data = await res.json()
    console.log(data)
   }

    return (
        <div className='container mx-auto'>
            <form onSubmit={onSubmit}
            className="p-10 bg-[#2D2D44] rounded-2xl my-20  space-y-8"
          >
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <TextField name="ideaTitle" isRequired>
                  <Label className='text-white'>Idea Title</Label>
                  <Input placeholder="Enter Your Idea Title" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              <TextField name="shortDescription" isRequired>
                <Label className='text-white'>short Description</Label>
                <Input placeholder="Enter Your Short Description" className="rounded-2xl" />
                <FieldError />
              </TextField>

              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label className='text-white'>Category</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="tech" textValue="tech">
                        Tech
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="health" textValue="health">
                        Health
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="ai" textValue="ai">
                        AI
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="education" textValue="education">
                        Education
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cultural" textValue="Cultural">
                        Cultural
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <TextField name="targetAudience" type="text" isRequired>
                <Label className='text-white'>Target Audience</Label>
                <Input
                  type="text"
                  placeholder="target Audience"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              <TextField name="detailedDescription" isRequired>
                <Label className='text-white'>Detailed Description</Label>
                <Input
                  placeholder="detailed Description"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              <div className="md:col-span-2">
                <TextField name="problemStatement" type="text" isRequired>
                  <Label className='text-white'>problem statement</Label>
                  <Input type="text" placeholder='Describe your problem' className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label className='text-white'>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              <div className="md:col-span-2">
                <TextField name="proposedSolution" isRequired>
                  <Label className='text-white'>proposed Solution</Label>
                  <TextArea
                    placeholder="Describe your proposed Solution"
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>


            <Button
              type="submit"
              variant="outline"
              className=" w-full bg-cyan-500 text-white"
            >
            Add Idea
            </Button>
          </form>
        </div>
    );
};

export default AddIdeasPage;