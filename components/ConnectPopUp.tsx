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
  StartButton: 'flex items-center justify-center bg-black rounded-full gap-2 p-4 cursor-pointer transition-transform transform hover:scale-[1.025] duration-300 ease-in-out',
  StartButtonText: 'font-pp-mori-semibold text-white font-pp-mori-semibold min-[1921px]:text-[1.874vw] md:text-[1.75rem] min-[430px]:text-[1.35rem] text-[1rem] min-[1921px]:px-[1.666vw] min-[1921px]:py-[1.458vw] lg:px-4 lg:py-5 md:py-5 md:px-6 sm:py-4 sm:px-5 py-2 px-3',
  dot: 'min-[1921px]:w-[1.041vw] min-[1921px]:h-[1.041vw] xl:h-5 xl:w-5 md:h-4 md:w-4 w-3 h-3 min-[1921px]:mr-[0.833vw] xl:mr-4 sm:mr-3 mr-1 bg-white rounded-full',
  name: 'font-pp-mori-semibold text-white lg:text-[18px] md:text-[18px] text-[12px] ml-[15px] sm:text-[14px]',
  button: 'bg-white hover:bg-[#cee968] sm:w-[40px] sm:h-[40px] h-[30px] w-[30px] sm:mr-[18px] mr-[20px] lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] rounded-full mt-[-12px] ml-[-40px] lg:mr-[-15px] md:mr-[-15px] cursor-pointer flex justify-center items-center',
  button1: 'font-pp-mori-semibold lg:w-[340px] lg:h-[60px] md:h-[60px] md:w-[420px] md:text-[22px] sm:w-[280px] sm:h-[40px] h-[35px] w-[260px] sm:mt-[-10px] sm:text-[16px] rounded-[30px] bg-white border-solid border-[1px] border-zinc-900 text-black lg:text-[22px] text-[16px] px-[15px] lg:mt-[20px] md:mt-[10px] mt-[5px] hover:bg-[#cee968] hover:border-[#141414] cursor-pointer',
  button2: 'flex flex-row font-pp-mori-semibold lg:text-[18px] md:text-[18px] text-[12px] sm:text-[14px] text-semibold bg-[#141414] border-solid inline border-[2px] border-zinc-700 hover:border-[#cee968] sm:py-[10px] px-[50px] sm:h-[45px] lg:h-[58px] md:h-[58px] lg:py-[13px] md:py-[13px] py-[10px] h-[43px] rounded-[30px] hover:bg-[#cee968] cursor-pointer',
  inside: 'font-pp-mori-semibold w-[145px] h-[30px] text-[9px] lg:w-[240px] lg:h-[50px] md:w-[280px] md:h-[50px] sm:w-[175px] md:text-[18px] sm:h-[35px] sm:text-[13px] rounded-[10px] bg-[#141414] border-solid border-[1px] border-zinc-800 text-white text-[16px] px-[15px] lg:mt-[10px] md:mt-[10px] sm:mt-[10px] mt-[5px] hover:border-[#141414]',
  inside1: 'font-pp-mori-semibold lg:w-[500px] lg:h-[50px] text-[9px] md:w-[575px] md:h-[50px] rounded-[10px] md:text-[18px] bg-[#141414] w-[310px] sm:w-[380px] sm:text-[13px] sm:h-[35px] border-solid border-[1px] border-zinc-800 text-white lg:text-[18px] text-[10px] h-[32px] px-[15px] lg:mt-[10px] md:mt-[10px] sm:mt-[10px] mt-[5px] hover:border-[#141414]',
  inside2: 'font-pp-mori-semibold lg:w-[470px] lg:h-[50px] text-[9px] md:w-[550px] md:h-[50px] text-white md:text-[18px] lg:text-[16px] sm:text-[13px] w-[280px] sm:w-[355px] sm:h-[35px] h-[30px] bg-[#141414]',
  span: 'font-pp-mori-semibold text-[#006cff] mt-[30px] ml-[-22px] text-[20px] px-[20px]',
  img: 'w-[230px] h-[230px] rounded-[30px] mt-[10px] mx-[190px]',
  img1: 'md:w-[25px] md:h-[25px] lg:w-[25px] lg:h-[25px] sm:w-[20px] sm:h-[20px] h-[15px] w-[15px]',
  para: 'font-pp-mori-semibold text-white text-left mt-[40px] px-[20px] text-[17px]',
  container: 'flex flex-col w-[350px] h-[425px] sm:w-[410px] md:w-[670px] md:h-[650px] lg:w-[570px] lg:h-[670px] items-center bg-black rounded-[30px] border-solid border-[1px] border-zinc-800',
  container1: 'flex flex-row justify-end lg:w-[500px] md:w-[600px] w-[350px] sm:w-[410px]',
  container2: 'flex w-[310px] lg:w-[500px] md:w-[600px] sm:w-[410px] lg:mt-[20px] md:mt-[20px] sm:mt-[20px] mt-[10px] lg:justify-between justify-between sm:justify-around md:justify-around',
  container3: 'flex lg:w-[500px] md:w-[600px] sm:w-[410px] lg:mt-[40px] md:mt-[40px] sm:mt-[40px] mt-[20px] justify-center',
  item: 'cursor-pointer font-pp-mori-semibold text-white px-4 pb-[6px] pt-[5px] hover:bg-white/20 hover:backdrop-blur-sm hover:text-white rounded-[10px]',
  spin: 'flex justify-center items-center w-[100%] h-[100%] bg-black bg-opacity-50 fixed top-0 left-0 z-[100]',
};

const ConnectPopUp: React.FC = () => {
  motion

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');
  const [project, setProject] = useState('');
  const [budget, setBudget] = useState('');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    const templateParams = {
      from_name: name,
      from_email: email,
      from_designation: designation,
      from_company: company,
      from_project: project,
      from_budget: budget,
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
        setDesignation('');
        setCompany('');
        setProject('');
        setBudget('');
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
      <motion.button onClick={handleOpen} className={classes.StartButton}>
        <p className={classes.StartButtonText}>START A PROJECT</p>
        <div className={classes.dot}></div>
      </motion.button>
      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={classes} id='about' className={classes.container}>
          <div className={classes.container1}>
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ rotate: 90 }} className={classes.button} onClick={handleClose}>
              <Image src={x} className={classes.img1} alt="Close" />
            </motion.div>
          </div>
          <form onSubmit={sendEmail}>
            <div className={classes.container2}>
              <div>
                <label className={classes.name}>Name</label><br />
                <input type='text' id='input' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className={classes.inside} required />
              </div>
              <div>
                <label className={classes.name}>Email</label><br />
                <input type='email' id='input' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='xyz@google.com' className={classes.inside} required />
              </div>
            </div>
            <div className={classes.container2}>
              <div>
                <label className={classes.name}>Designation</label><br />
                <input type='text' id='input' value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder='Manager' className={classes.inside} required />
              </div>
              <div>
                <label className={classes.name}>Company</label><br />
                <input type='text' id='input' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Company Name' className={classes.inside} required />
              </div>
            </div>
            <div className={classes.container2}>
              <div>
                <label className={classes.name}>Project</label><br />
                <div className={classes.inside1}>
                  <select id='input' value={project} onChange={(e) => setProject(e.target.value)} className={classes.inside2} required>
                    <option className='font-pp-mori-semibold' value='-NIL-'>-Select a Project-</option>
                    <option className='font-pp-mori-semibold' value='Web/App Development'>Web/App Development</option>
                    <option className='font-pp-mori-semibold' value='Photography'>Photography</option>
                    <option className='font-pp-mori-semibold' value='Music'>Music</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={classes.container2}>
              <div>
                <label className={classes.name}>Budget</label><br />
                <div className={classes.inside1}>
                  <select id='input' value={budget} onChange={(e) => setBudget(e.target.value)} className={classes.inside2}>
                    <option className='font-pp-mori-semibold' value='5K+'>5K+</option>
                    <option className='font-pp-mori-semibold' value='10K+'>10K+</option>
                    <option className='font-pp-mori-semibold' value='15K+'>15K+</option>
                    <option className='font-pp-mori-semibold' value='20K+'>20K+</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={classes.container3}>
              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
                <input type='submit' id='input' placeholder='Submit' className={classes.button1} required />
              </motion.div>
            </div>
            {loading && (
              <div className={classes.spin}>
                <PuffLoader size={70} color="white" />
              </div>
            )}
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ConnectPopUp;