import ContactForm from '../components/ContactForm'
import ContactTop from '../components/ContactTop'
import Delivery from '../components/Delivery'
import FanchiseOportunity from '../components/FanchiseOportunity'
import Location from '../components/Location'

export default function Contact() {
  return (
    <div>
      <ContactTop />
      <ContactForm />
      <Location />
      <FanchiseOportunity />
      <Delivery />
    </div>
  )
}
