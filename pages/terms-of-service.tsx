import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

const TermsOfService = () => {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Terms of Service</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Queerently Watching Terms of Service</h1>
        <p className="mt-6 text-xl leading-8">
          Effective Date: May 18, 2023
        </p>
        <div className="mt-10 max-w-2xl">
          <h2 className="font-bold">TERMS OF SERVICE</h2>
          <p>
            This Terms of Service ("Agreement") is a legal agreement between you
            ("User" or "you") and Queerently Watching ("Company," "we," "us," or
            "our") governing your use of QueerentlyWatching.com (the "Website"). By
            accessing or using the Website, you agree to be bound by this Agreement.
          </p>

          <h2 className="font-bold mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Website, you acknowledge that you have read,
            understood, and agree to be bound by the terms and conditions of this
            Agreement. If you do not agree to these terms, you may not access or use
            the Website.
          </p>

          <h2 className="font-bold mt-8">2. User Obligations</h2>
          <p>
            a. Eligibility: You must be at least 18 years old to access or use
            the Website.
          </p>
          <p>
            b. Account: To access certain features or services on the Website, you
            may need to create an account. You are responsible for maintaining the
            confidentiality of your account information, and you agree to accept
            responsibility for all activities that occur under your account.
          </p>
          <p>
            c. User Content: You are solely responsible for any content you post,
            upload, or transmit through the Website. You represent and warrant that
            you have all necessary rights to your content and that its use does not
            violate any laws or infringe upon the rights of any third party.
          </p>

          <h2 className="font-bold mt-8">3. Intellectual Property</h2>
          <p>
            a. Website Content: All content on the Website, including text,
            graphics, logos, images, and software, is the property of the Company or
            its licensors and is protected by intellectual property laws. You may
            not reproduce, distribute, modify, or create derivative works from any
            content without prior written consent from the Company.
          </p>
          <p>
            b. User Content: By posting or uploading content on the Website, you
            grant the Company a non-exclusive, worldwide, royalty-free license to
            use, reproduce, modify, adapt, publish, and distribute the content for
            any purpose.
          </p>

          <h2 className="font-bold mt-8">4. Disclaimer of Warranties</h2>
          <p>
            The Website is provided on an "as-is" and "as available" basis without
            warranties of any kind, whether express or implied. The Company does not
            warrant that the Website will be error-free, secure, or uninterrupted,
            nor does it make any representations regarding the accuracy, reliability,
            or completeness of any content or materials on the Website.
          </p>

          <h2 className="font-bold mt-8">5. Limitation of Liability</h2>
          <p>
            In no event shall the Company be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or relating
            to your use of the Website or any content or materials available through
            the Website.
          </p>

          <h2 className="font-bold mt-8">6. Governing Law and Jurisdiction</h2>
          <p>
            This Agreement shall be governed by and construed in accordance with the
            laws of the United States of America. Any disputes arising out of or relating to
            this Agreement or the Website shall be subject to the exclusive
            jurisdiction of the courts of United States of America.
          </p>

          <h2 className="font-bold mt-8">7. Modifications and Termination</h2>
          <p>
            The Company reserves the right to modify, suspend, or terminate the
            Website or any part thereof at any time without prior notice. We may
            also update this Agreement from time to time, and your continued use of
            the Website after such changes shall constitute your consent to the
            revised terms.
          </p>

          <h2 className="font-bold mt-8">8. Miscellaneous</h2>
          <p>
            This Agreement constitutes the entire agreement between you and the
            Company regarding your use of the Website. If any provision of this
            Agreement is found to be invalid or unenforceable, the remaining
            provisions shall continue to be valid and enforceable. Failure to
            enforce any right or provision of this Agreement shall not be deemed a
            waiver of such right or provision.
          </p>

          <p className="mt-8">
            While we strive to provide a safe and inclusive environment, Queerently Watching does not guarantee the accuracy, completeness, or reliability of user-generated content. You understand that any reliance on such content is at your own risk.
          </p>

        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://images.unsplash.com/photo-1586856635275-af01918579ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            By using Queerently Watching, you agree to abide by these Terms.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact Us</h2>
          <p className="mt-6">
            If you have any questions, concerns, or requests regarding these Terms of Service, please contact us at queerentlywatching@gmail.com.
          </p>
          <p className="mt-8">
            Thank you for using Queerently Watching. We appreciate your cooperation and hope you enjoy your experience on our platform.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService;


