import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

const Privacy = () => {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Privacy</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Queerently Watching Privacy Policy</h1>
        <p className="mt-6 text-xl leading-8">
          Effective Date: May 18, 2023
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            At Queerently Watching, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information when you use our platform. By accessing or using Queerently Watching, you consent to the practices described in this Privacy Policy.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Types of Data:</strong> We may collect various types of information from you, including personal information, user-generated content, and technical data, such as cookies and log files. This information helps us provide and improve our services and ensure the security of our platform.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Data Usage:</strong> We use the collected information to operate and maintain our platform, personalize your experience, communicate with you, provide customer support, and improve our services. We may also use the data for research and analytics purposes while ensuring your privacy and confidentiality.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Third-Party Sharing:</strong> We may share your information with trusted third parties, including service providers, business partners, and law enforcement agencies, as necessary to provide and enhance our services, comply with legal obligations, or protect our rights and interests.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Your privacy is important to us, and we take appropriate measures to safeguard your information. However, please note that no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security, and you use Queerently Watching at your own risk.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Contact Us</h2>
          <p className="mt-6">
            If you have any questions, concerns, or requests regarding your privacy or this Privacy Policy, please contact us at queerentlywatching@gmail.com.
          </p>
          <p className="mt-10">
            We may update this Privacy Policy from time to time, and the revised version will be effective when it is posted. Please review this Privacy Policy periodically to stay informed about our practices.
          </p>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Protecting your privacy is our priority.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Data Retention and Deletion</h2>
          <p className="mt-6">
            We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. If you want your data to be deleted, please contact us using the information provided in the "Contact Us" section.
          </p>
          <p className="mt-8">
            Thank you for choosing Queerently Watching. We appreciate your trust in us and remain committed to protecting your privacy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy;

