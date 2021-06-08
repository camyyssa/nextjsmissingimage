import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Demo of missing images on Nextjs</h1>
      <div>
        <div>
          <div>
            <Image
              width="496"
              height="414"
              src="/images/half-day-meeting.png"
              alt="Hotel proposal"
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              width="496"
              height="414"
              src="/images/meeting-room.png"
              alt="Hotel proposal"
            />
          </div>
        </div>
        <div>
          <div>
            <Image
              width="496"
              height="414"
              src="/images/certificate-of-excellence.png"
              alt="Meeting room in hotel proposal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
