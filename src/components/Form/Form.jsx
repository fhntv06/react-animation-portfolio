import { motion } from 'framer-motion';
import { Button, Input } from '../index';
import './form.scss';

const Form = () => {
  return (
    <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}>
      <Input name='name' type="text" required placeholder='Name' />
      <Input name='email' type="email" required placeholder='Email' />
      <Input name='message' cols="30" rows="10" required placeholder='Message' isTextarea />
      <Button orange type='submit'>Submit</Button>
    </motion.form>
  )
}

export default Form;