

export default function Appointment() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-green-400">
              Get Your Appointment !
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              {/* <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-green-400 mr-100">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}


              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-green-400">
                    Full Name
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    autoComplete="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-green-400">
                    Email
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="number" className="block text-sm font-medium leading-6 text-green-400">
                    Phone Number
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="phno"
                    name="phno"
                    type="number"
                    autoComplete="number"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="time" className="block text-sm font-medium leading-6 text-green-400">
                    Appointment Time
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="apttime"
                    name="apttime"
                    type="datetime-local"
                    autoComplete="datetime-local"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-green-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              
  
  
              <div>
                <button
                  type="button"
                  onClick={ () => {
      window.location.href = "/payment";
                  }}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Confirm Appointment
                </button>
              </div>
            </form>
  
           
          </div>
        </div>
      </>
    )
  }