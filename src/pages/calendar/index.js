import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Calendar() {
  return (
    <Layout title="Calendar">
      <section id="calendar">
        <div className="container">
          <h1 className={styles.header}> Calendar </h1>
          <div className="row">
            <div className="col" style={{paddingLeft: "20%"}}>
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
      </section>
    </Layout>
  );
}
