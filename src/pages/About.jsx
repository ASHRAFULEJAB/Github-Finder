

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-5'> Github Finder </h1>
      <p className='mb-4 text-2xl font-light text-white font-bold'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the::
        <strong>
        <a href='https://github.com/ASHRAFULEJAB/FeedbackApp'>
          {' '}
         <u> React Front To Back , </u>
        </a>{' '}
        </strong>
        <strong>
          <a href='https://github.com/ASHRAFULEJAB/E-COMMERCE'> <u>Ashraful Islam Khan</u></a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version ::  <span className='text-white'>1.1.10</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By ::  
        <a className='text-white' href='https://www.facebook.com/profile.php?id=100032408406839'>
            Ashraful Islam Khan
        </a>
      </p>
    </div>
  )
}

export default About
