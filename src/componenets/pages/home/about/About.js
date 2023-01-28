import "./About.css";
import Button from "../../../other/button/Button";

const windows_picture =
  "https://lh3.googleusercontent.com/F30LHP6gMUq5A45AH8S633SJPkn9t1--Q9CQJbkpPmHsbhReTWR_-i-QUn0OzckrAnPplVMTdAF1_mR6PySWtq06BpaOfFbkZysd_wH7gzMxHVT-Q5i8uopHJNQS8y3z6JmRP-JvCnhuPS_Vxye56LNoWknH6ifC7nAg_grdEDkDPS8uV3G2QElqIGqIGtaM7HWsEzJob93OAeJue7nUUDyi4iRcjSalo-KCPJvpYbJ_S524GaGdDdWeG5hIJnFBey1tDOWYAAKZuTpffcx8QUkJ-ljkwhcvPDnM06b6YPIYBFvFi2NYcxqnVysOe_ABr-2RLr6K5bynsqeDsTFOx49FhwYPeeRf9FBQaBxsdypmJavC8jVPcKz4N-9lHAas4kIHY01mS3ZTg-bgXMe-OTzXu9rsI8GF4sp8PkppXsVoX8NduCZ7CTRBcBkWemS3LbR5BUniIGSlOOuWmyACGhJ1Ip3DcknvLiqw0jgYxj5m6Tpe_OhofZVRv2T0tu7CV-KNOpTN6fZS0S3KTdbVmlo7iJiJBb4Jbf2kaf5sJv4_bRw_htEJ5TW0e47zvuuzLpGav9pWAwY-fj556fXdyEZQ_B2AejMK4nSRDlCTDV_k25CyjRDa4nmk5qrjc4Yd0ZxI_KYnc_053lFH9I_iw-yqqJhk98LJIEjOvUUBY3J46PsEDV-63vTPZlylcEy4fa8mr6ZFljDJkuLgcpI04QmLDy6ZFecv_VpWNSZNT-_J_iqs3OG5G-rkA6dilXTq-yPBEsXsloQSdzGowX1fGVweFDv-CkjQBU6reNjtFaMIRSqQ1bwdvX9C_qKWZLIRlqEaD3jf1fxb3nc_YGuyQ1CXPo3A8ejVB-IhbwhiV6BejUajMOgQz_dmEJtfGo9Oswh8C2A7Hz_JAupzC4e0tz6IT-Njhncu2UR7d2_Ht6F_tmsp=w1114-h1022-no?authuser=0";

// import windows_picture from "../../../../assets/windowssquare.png";

export default function About() {
  return (
    <div className="section-container">
      <div className="about-section">
        <div className="about-one">
          <h2>Who are we?</h2>
          <h3 className="alternate-section-title">Artists & Window Cleaners</h3>
          <img src={windows_picture} className="about-image" />
        </div>
        <div className="about-two">
          <h4>Our Mission</h4>
          <p>
            Every employee at An Artist's Touch is a musician. Our goal is clear
            and simple, help artists to follow their dreams. We do this by
            providing them with a financial foundation, giving them the time and
            space to hone their craft, while we use our platform to share it
            with the world!
          </p>
          <h4>But will we get the job done to standard?</h4>
          <p>
            Our employees our trained professionals who clean using the
            traditional method, allowing us to leave your windows sparkling. An
            artist is someone with heightened attention to detail, someone who
            takes pride in their work and executes it with flawless technical
            proficiency.
          </p>
          <h4>New kids on the block</h4>
          <p>
            When you get your windows cleaned with ‘An Artists Touch’ you join
            the family. With your support we can discover artists with world
            class potential and put them under the spotlight!
          </p>
          <div className="about-button-container">
            <Button value="Book an Artist" page="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
