import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

export default function Calendar() {
  return (
    <Layout title="Calendar">
      <BrowserOnly> 
      {
       () => <script type="text/javascript">
          window.onload = function() {
            Calendly.initBadgeWidget({
                url: 'https://calendly.com/aadit-kamat',
                text: 'Schedule time with me',
                color: '#0069ff',
                textColor: '#ffffff',
                branding: true,
              })
          }
          </script>
       } 
      </BrowserOnly>
      <section id="calendar">
        <div className="container">
          <h1 className={styles.header}> Calendar </h1>
          <div className="row">
            <div className="col" style={{ paddingLeft: '20%' }}>
              <iframe
                src="https://calendar.google.com/calendar/embed?&wkst=1&src=https://calendar.google.com/calendar/embed?src=aaditrahulkamat%40gmail.com&ctz=America%2FNew_York"
                className={styles.calendar}
                width="800"
                height="600"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}