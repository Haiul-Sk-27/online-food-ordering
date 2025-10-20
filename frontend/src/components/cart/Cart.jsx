import React from 'react'
import CartItem from './CartItem'
import { Button, Card, Divider, Modal, TextField } from '@mui/material';
import AddressCard from './AddressCard';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Grid } from '@mui/material';



const items = [1, 1];

const Cart = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const createOrderUsingSelectAddress = () => {

  }

  const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: ""
  }

  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string().required("Pincode is required"),
    city: Yup.string().required("City is required"),
  });

  const showButton = true;

  const handleOpenAddressModel = () => {
    console.log("Open new address modal");
    handleOpen();
  };

  const handleSubmit = () => {

  }
  return (
    <>
      <main className='lg:flex justify-between'>

        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-3'>
          {items.map((item, index) => (
            <CartItem key={index} />
          ))}

          <Divider />

          <div className='billDetails px-5 text-sm'>
            <p className='font-extrabold py-3'>Bill Details</p>
            <div className='flex justify-between text-gray-400'>
              <p>Item Total</p>
              <p>₹ 599</p>
            </div>

            <div className='flex justify-between text-gray-400'>
              <p>Delivery Fee</p>
              <p>₹ 599</p>
            </div>

            <div className='flex justify-between text-gray-400'>
              <p>GST and Restaurant Charge</p>
              <p>₹ 599</p>
            </div>


          </div>
          <Divider />
          <div className=' p-5 flex justify-between text-gray-400'>
            <p>Total Pay</p>
            <p>₹ 599</p>
          </div>
        </section>

        <Divider orientation='vertical' flexItem />

        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>

            <div className='flex gap-5 flex-wrap justify-center'>
              {[1, 1, 1, 1, 1].map((item) => <AddressCard handleSelectAddress={createOrderUsingSelectAddress} item={item} showButton={true} />)}

              <Card className='flex gap-5 w-64 p-5'>
                <AddLocationIcon />
                <div className='sapce-y-3 flex-wrap text-gray-500'>
                  <h1 className='font-semibold  text-lg text-white'>Add New Address</h1>
                  {
                    showButton && (
                      <Button variant='outlined' fullwidth onClick={handleOpenAddressModel}>Add</Button>
                    )
                  }
                </div>
              </Card>
            </div>
          </div>
        </section>

      </main>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}
            mb={2}>Add New Address</Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                    error={touched.streetAddress && Boolean(errors.streetAddress)}
                    helperText={<ErrorMessage name="streetAddress" />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="city"
                    label="City"
                    fullWidth
                    variant="outlined"
                    error={touched.city && Boolean(errors.city)}
                    helperText={<ErrorMessage name="city" />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="state"
                    label="State"
                    fullWidth
                    variant="outlined"
                    error={touched.state && Boolean(errors.state)}
                    helperText={<ErrorMessage name="state" />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="pincode"
                    label="Pincode"
                    fullWidth
                    variant="outlined"
                    error={touched.pincode && Boolean(errors.pincode)}
                    helperText={<ErrorMessage name="pincode" />}
                  />
                </Grid>


                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    Delivery Here
                  </Button>
                </Grid>
              </Grid>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  )
}

export default Cart