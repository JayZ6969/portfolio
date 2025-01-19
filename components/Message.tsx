import { FC } from 'react';
import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Box from '@mui/material/Box';
import x from '../public/assets/icons/x.svg';
import Modal from '@mui/material/Modal';
import { PuffLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const classes = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
  dot: 'min-[1921px]:w-[1.041vw] min-[1921px]:h-[1.041vw] xl:h-5 xl:w-5 md:h-4 md:w-4 w-3 h-3 min-[1921px]:mr-[0.833vw] xl:mr-4 sm:mr-3 mr-1 bg-white rounded-full',
  Container: 'flex flex-col p-8 lg:max-w-[600px] sm:max-w-[500px] w-[90vw] h-auto items-center bg-black rounded-[2rem] border-solid border-2 border-zinc-800',
  CloseBtnContainer: 'flex flex-row justify-end w-full',
  CloseBtn: 'bg-white hover:bg-[#CEE968] md:w-[3rem] md:h-[3rem] sm:w-[2.75rem] sm:h-[2.75rem] h-[2.25rem] w-[2.25rem] rounded-full mt-[-12px] mr-[-15px]  cursor-pointer flex justify-center items-center',
  Form: 'flex flex-col items-center w-full gap-4',
  Label: 'font-pp-mori-semibold text-white md:text-xl text-lg sm:text-sm leading-none',
  FieldContainer1: 'flex flex-col w-full justify-between gap-1',
  Input: 'font-pp-mori-semibold w-full lg:h-12 md:h-[3rem] h-[2.5rem] lg:text-lg md:text-md text-sm sm:rounded-xl rounded-lg bg-[#141414] border-solid border-2 border-zinc-800 text-white px-[15px] hover:border-white',
  TextAreaInput: 'font-pp-mori-semibold w-full lg:text-lg md:text-md text-sm rounded-[10px] bg-[#141414] border-solid border-2 border-zinc-800 text-white px-[1rem] hover:border-white',
  SubmitBtnContainer: 'flex w-full justify-center',
  SubmitBtn: 'font-pp-mori-semibold w-full lg:h-14 lg:max-w-[340px] sm:max-w-56 h-[3rem] lg:text-lg md:text-md text-sm rounded-full bg-white border-solid border-2 border-zinc-900 text-black px-[15px] hover:bg-[#CEE968] cursor-pointer',
  CloseBtnImage: 'md:w-[25px] md:h-[25px] w-[20px] h-[20px]',
  Spinner: 'flex justify-center items-center w-[100%] h-[100%] bg-black bg-opacity-50 fixed top-0 left-0 z-[100]',
};

const Message: FC<{ children: React.ReactNode }> = ({ children }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      from_body: body,
      to_name: 'Jayasheel Vinay J',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response);
        toast.success('Response submitted successfully.', {
          style: {
            borderRadius: '10px',
            padding: '10px',
            color: '#ffffff',
            background: '#141414',
          },
          duration: 2000,
        });
        setLoading(false);
        setName('');
        setEmail('');
        setSubject('');
        setBody('');
      })
      .catch((error: unknown) => {
        console.log('FAILED...', error);
        toast.error('Failed to Submit the response.', {
          style: {
            borderRadius: '10px',
            padding: '10px',
            color: '#ffffff',
            background: '#141414',
          },
          duration: 2000,
        });
        setLoading(false);
      });
  };

  return (
    <div>
      <Toaster position='top-center' />
      <motion.button onClick={handleOpen}>
        {children}
      </motion.button>
      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={classes} id='about' className={classes.Container}>
          <div className={classes.CloseBtnContainer}>
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ rotate: 90 }} className={classes.CloseBtn} onClick={handleClose}>
              <Image src={x} className={classes.CloseBtnImage} alt="Close" />
            </motion.div>
          </div>
          <form onSubmit={sendEmail} className={classes.Form}>
            <div className={classes.FieldContainer1}>
              <label className={classes.Label}>Name</label>  
              <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className={classes.Input} required autoComplete="on"/>
            </div>
            <div className={classes.FieldContainer1}>
              <label className={classes.Label}>Email</label>
              <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='xyz@abc.com' className={classes.Input} required autoComplete="on"/>
            </div>
            <div className={classes.FieldContainer1}>
              <label className={classes.Label}>Subject</label>
              <input type='subject' id='subject' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' className={classes.Input} required />
            </div>
            <div className={classes.FieldContainer1}>
              <label className={classes.Label}>Message</label>
              <textarea  rows={5} id='message' value={body} onChange={(e) => setBody(e.target.value)} className={classes.TextAreaInput} required />
            </div>
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className={classes.SubmitBtnContainer} >
              <input type='submit' id='submit' placeholder='Submit' className={classes.SubmitBtn} required />
            </motion.div>
            {loading && (
              <div className={classes.Spinner}>
                <PuffLoader size={70} color="white" />
              </div>
            )}
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Message;