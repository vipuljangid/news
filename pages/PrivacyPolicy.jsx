import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-2xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4">Juris Hour hereinafter referred as ‘we’, ‘us’ or ‘our’ is committed to respect your privacy and choices.</p>
            <h2 className="text-xl font-bold mb-2">Personal Data</h2>
            <p className="mb-4">While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</p>
            <ul className="list-disc pl-8 mb-4">
                <li>Address, State, Province, ZIP/Postal code, City</li>
            </ul>
            <h2 className="text-xl font-bold mb-2">Usage Data</h2>
            <p className="mb-4">Usage Data is collected automatically when using the Service. Usage Data may include information such as your device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            <p className="mb-4">When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, Your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>
            <p className="mb-4">We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device.</p>
            <h2 className="text-xl font-bold mb-2">Use of Personal Data</h2>
            <p className="mb-4">The Company may use Personal Data for the following purposes:</p>
            <ul className="list-disc pl-8 mb-4">
                <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                <li>To manage Your Account: to manage your registration as a user of the Service. The Personal Data you provide can give you access to different functionalities of the Service that are available to you as a registered user.</li>
                <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services you have purchased or of any other contract with Us through the Service.</li>
                <li>...</li> {/* Include all other purposes here */}
            </ul>
            {/* Include other sections of the privacy policy here */}
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, you can contact us:</p>
            <ul className="list-disc pl-8">
                <li>By email: <a href="mailto:info@jurishour.in" className="text-blue-500">info@jurishour.in</a></li>
            </ul>
        </div>
    );
};

export default PrivacyPolicy;
