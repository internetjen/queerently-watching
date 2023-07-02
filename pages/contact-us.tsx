const ContactUs = () => {
    return (
      <div className="bg-white py-24 sm:py-32 flex justify-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-500">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1 flex justify-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Have questions? Need help? We’re here to help you.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-3 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a className="font-semibold text-indigo-600" href="mailto:queerentlywatching@gmail.com">
                          queerentlywatching@gmail.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
   
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
export default ContactUs