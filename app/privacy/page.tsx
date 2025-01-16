export default function Privacy() {
    return (
      <section className="bg-background py-12 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 font-bold md:px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Privacy Policy
            </h2>
            <p className="text-muted-foreground md:text-xl">
              At EduHub, we are committed to protecting your privacy. This privacy
              policy outlines how we collect, use, and safeguard your personal
              information when you use our platform and services including EduGPT,
              EduKit, and EduBox.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Data Collection</h3>
              <p className="mt-4 text-muted-foreground">
                We collect certain personal information when you use our services, including
                but not limited to your name, email address, wallet addresses, and
                interaction data with our tools (EduGPT, EduKit, and EduBox). We also
                collect technical information about how you use our platform and blockchain
                interaction data.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Data Usage</h3>
              <p className="mt-4 text-muted-foreground">
                We use your information to provide and improve our services, including
                EduGPT's AI blockchain exploration capabilities, EduKit's development
                tools, and EduBox's no-code deployment features. This data helps us
                enhance user experience, provide technical support, and develop new
                features.{" "}
                <strong>
                  While we strive to provide accurate and reliable tools for the EDU
                  Chain ecosystem, you are responsible for your own actions and
                  transactions on the blockchain.
                </strong>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Data Sharing</h3>
              <p className="mt-4 text-muted-foreground">
                We may share your data with third-party service providers who help us
                operate our platform, such as cloud hosting providers, analytics
                services, and blockchain infrastructure providers. These providers are
                bound by strict confidentiality agreements. We may also share
                anonymized data about platform usage to improve the EDU Chain ecosystem.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">User Rights</h3>
              <p className="mt-4 text-muted-foreground">
                You have the right to access, update, or delete your personal
                information. For blockchain-related data that is publicly visible,
                please note that we cannot modify or delete information stored on the
                blockchain. If you have any questions about your data rights, please
                <strong>
                  {" "}
                  <a href="https://t.me/eduhub_tg" target="_blank">contact us</a>{" "}
                </strong>.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Data Security</h3>
              <p className="mt-4 text-muted-foreground">
                We implement industry-standard security measures to protect your data,
                including encryption, secure workflows, and regular security audits.
                However, please note that blockchain transactions are public by nature,
                and any information you submit to the blockchain will be publicly
                visible.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Changes to This Privacy Policy
              </h3>
              <p className="mt-4 text-muted-foreground">
                We may update this privacy policy to reflect changes in our services,
                practices, or applicable laws. Any significant changes will be
                communicated through our website or email notifications. We recommend
                checking this policy periodically.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <p className="mt-4 text-muted-foreground">
                If you have questions about this privacy policy or our data practices
                related to EduGPT, EduKit, EduBox, or any other EduHub services, please
                <strong>
                  {" "}
                  <a href="https://t.me/eduhub_tg" target="_blank">contact us</a>{" "}
                </strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
