import { useState } from 'react';

import { toast } from 'sonner';
import FillLoading from '../components/shared/fill-loading';
import type { IForm } from '../types/index';
import { Link } from 'react-router-dom';
import { Dot, Home, Mail, Phone, Send } from 'lucide-react';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { RiTelegram2Line } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState<IForm>({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('All fields are required');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('All fields are required');
      setIsLoading(false);
      return;
    }

    const response = await fetch(
      `https://api.telegram.org/bot${import.meta.env.VITE_APP_TELEGRAM}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: import.meta.env.VITE_APP_CHATID,
          text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}
          `,
        }),
      },
    )
      .then(() => toast.success('Message sent successfully'))
      .finally(() => setIsLoading(false));

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact">
      <div className="max-w-6xl mx-auto  max-md:px-6 py-24">
        <div className="relative min-h-[40vh] flex items-center justify-end flex-col">
          <h2 className="text-center text-4xl section-title font-creteRound mt-2">
            <span>Contact</span>
          </h2>

          <div className="flex gap-1 items-center mt-4">
            <Home className="w-4 h-4" />
            <a
              href={'/#home'}
              className="opacity-90 hover:underline hover:opacity-100"
            >
              Home
            </a>
            <Dot />
            <p className="text-muted-foreground">Contact</p>
          </div>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6">
          <div className="flex flex-col">
            <h1 className="text-4xl font-creteRound">Contact William</h1>
            <p className="mt-2 text-muted-foreground">
              I am here to help and answer any question you might have. I look
              forward to hearing from you
            </p>

            <div className="mt-12 flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <p className="text-sm">williamismoilov@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Phone className="w-4 h-4" />
              <p className="text-sm">+82 10 3913-4666</p>
            </div>

            <div className="flex gap-4 py-8">
              <Link to={'https://github.com/WilliamIsmoilov'}>
                <FiGithub className="w-8 h-8" />
              </Link>

              <Link to={'https://www.linkedin.com/in/william-ismoilov/'}>
                <FiLinkedin className="w-8 h-8" />
              </Link>

              <Link to={'https://t.me/william_ismoilov'}>
                <RiTelegram2Line className="w-8 h-8" />
              </Link>

              <Link to={'https://www.instagram.com/william_ismoilov/'}>
                <FaInstagram className="w-8 h-8" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <h1 className="text-4xl font-creteRound mb-2">Contact form</h1>
            <form onSubmit={handleSubmit}>
              {isLoading && <FillLoading />}
              <div className="flex flex-col space-y-3">
                <Textarea
                  name="message"
                  className="resize-none h-32"
                  placeholder="Ask question or just say Hi"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="name"
                  placeholder="Your name here"
                  value={formData.name}
                  onChange={handleChange}
                />

                <Button
                  className="w-fit"
                  size={'lg'}
                  type="submit"
                  disabled={isLoading}
                >
                  <span>Send</span>
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>{' '}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
