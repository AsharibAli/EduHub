export default function Terms() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-4xl px-4 font-bold md:px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Terms of Service
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Welcome to EduHub. By using our services, you agree to these terms
              and conditions.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Introduction</h3>
              <p className="mt-2 text-muted-foreground">
                EduHub provides developer tools and community resources for the EDU Chain ecosystem. 
                Our platform includes EduGPT (AI Blockchain Explorer), EduKit (dApp Development Starter Kit), 
                and EduBox (No-Code Token/NFT Deployment Tool). These Terms of Service outline the rules 
                and regulations for using our platform.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">User Responsibilities</h3>
              <p className="mt-2 text-muted-foreground">
                As a user of EduHub, you are responsible for maintaining the security of your account 
                and for all activities that occur under your account. When using our tools, particularly 
                EduBox for token/NFT deployment, you are solely responsible for your on-chain actions. 
                While our tools aim to simplify blockchain development, you should understand the 
                implications of deploying smart contracts and conduct proper testing before deployment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Service Usage</h3>
              <p className="mt-2 text-muted-foreground">
                Our services (EduGPT, EduKit, and EduBox) are provided as development and educational 
                tools. You agree to use these services responsibly and in compliance with EDU Chain's 
                protocols and standards. While EduBox simplifies deployment processes, you remain 
                responsible for any smart contracts, tokens, or NFTs you deploy using our platform.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Data Privacy</h3>
              <p className="mt-2 text-muted-foreground">
                We take the privacy of your data seriously. When using EduGPT or any of our tools, 
                your interaction data may be collected to improve our services. We will collect and 
                use your personal information in accordance with our{" "}
                <strong>
                  <a href="/privacy">Privacy Policy</a>
                </strong>.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Intellectual Property</h3>
              <p className="mt-2 text-muted-foreground">
                All content and materials on our platform, including EduKit's libraries, EduGPT's 
                interface, and EduBox's tools, are the property of EduHub or our licensors. While 
                we encourage development on EDU Chain, you may not reproduce or distribute our 
                proprietary tools without express permission.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Limitation of Liability</h3>
              <p className="mt-2 font-bold text-muted-foreground">
                EduHub will not be liable for any losses or damages arising from your use of our 
                services, including but not limited to errors in smart contract deployment, token 
                creation, or AI-powered blockchain exploration. Users should exercise caution and 
                conduct proper testing before deploying any solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Changes to Terms</h3>
              <p className="mt-2 text-muted-foreground">
                EduHub reserves the right to modify these terms at any time. We will notify users 
                of any significant changes to our services or terms. Your continued use of EduGPT, 
                EduKit, or EduBox after such changes constitutes acceptance of the new terms.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <p className="mt-2 text-muted-foreground">
                If you have any questions about these terms or our services, please
                <strong>
                  <a href="https://t.me/eduhub_tg" target="_blank"> contact us</a>
                </strong>
                . We are here to support your development journey on EDU Chain.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
