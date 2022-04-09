import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';

export default function Calendar() {
  return (
    <Layout title="Calendar">
      <Head>
        <script type="text/javascript">
          {`window.onload = function() {
            Calendly.initBadgeWidget({
                url: 'https://calendly.com/aadit-kamat',
                text: 'Schedule time with me',
                color: '#0069ff',
                textColor: '#ffffff',
                branding: true,
              })
            }`
          }
        </script>
      </Head>
      <section id="calendar">
        <div className="container">
          <h1 className={styles.header}> Calendar </h1>
          <div className="row">
            <div className="col" style={{ paddingLeft: '20%' }}>
              <iframe
                src="https://calendar.google.com/calendar/embed?&wkst=1&src=aadit.k12%40gmail.com&ctz=Asia%2FSingapore"
                className={styles.calendar}
                width="800"
                height="600"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </section>
    </Layout>
  );
}
