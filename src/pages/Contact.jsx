import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const goBack = useNavigate();

  return (
    <>
      <p>
        If somebody on your product page feels the need to contact you, for
        whatever reason, that should be possible from that page.
      </p>
      <p>
        You can of course link to the contact page but giving the visitor an
        email address and phone number (and possibly a link to a contact form)
        is even better.
      </p>
      <p>
        Put the contact information at the bottom of the page. Somebody’s who’s
        really interested in your product will more than likely look at
        everything you’ve got to say about it and scroll down.
      </p>
      <p>
        You can also put the contact info or a call to action at the right side
        of the page. But don’t put it only at the right side. That’s not enough.
      </p>

      <button className='btn go-back' onClick={() => goBack(-1)}>
        Back
      </button>
      <button
        className='btn ml-20'
        onClick={() => (window.location = 'mailto:dombrovskiy91@gmail.com')}
      >
        Contact Me
      </button>
    </>
  );
};
