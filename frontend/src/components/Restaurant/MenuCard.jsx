import { Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ingredients = [
    {
        Category: "Nuts & Seeds",
        ingredient: "Cashews"
    },
    {
        category: "Protein",
        ingredient: "Protein"
    },
    {
        category: "Protein",
        ingredient: "Bacon Strips"
    }
]

const demo = [
    // {
    //     Category: "Nuts & Seeds",
    //     ingredient: ["Cashews"]
    // },
    {
        category: "Protein",
        ingredient: ["Protein", "Bacon Strips"]
    },
    {
        category: "Protein",
        ingredient: ["Ground Beef", "Bacon Strips"]
    }
]
const MenuCard = () => {

    const item = "Pizza"

    const handleCheckBoxChange = (value) => {
        console.log("Selected:", value);
    };
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <div className='lg:flex items-center justify-between '>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className='w-[7rem] h-[7rem] object-cover' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="" />
                    </div>
                    <div className='pl-2 space-y-1 lg:space-y-5 lg:max-w-2xl'>
                        <p className='font-semibold text-xl'>Burger</p>
                        <p>₹ 499</p>
                        <p className='text-gray-400'>Noce Food</p>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <from>
                    <div className=' pl-5 flex gap-5 flex-wrap'>
                        {
                            demo.map((item) => (

                                <div>
                                    <p>{item.category}</p>
                                    <FormGroup>
                                        {item.ingredient.map((ingredient, idx) => (
                                            <FormControlLabel
                                                key={idx}
                                                control={
                                                    <Checkbox
                                                        onChange={() => handleCheckBoxChange(ingredient)}
                                                    />
                                                }
                                                label={ingredient}
                                            />
                                        ))}
                                    </FormGroup>
                                </div>

                            ))
                        }
                    </div>
                    <div className='pl-5'>
                        <Button variant="contained"
                            color="primary"
                            disabled={true} type='submit'>{true ? "Add to Cart" : "Out of Stock"}</Button>
                    </div>
                </from>
            </AccordionDetails>
        </Accordion>
    )
}

export default MenuCard