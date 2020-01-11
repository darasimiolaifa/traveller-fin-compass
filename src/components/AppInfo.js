import React from 'react';
import AppName from './AppName';
import Button from './Button';

const AppInfo = () => {
  return (
    <section className="app-info-section">
     <AppName />
      <div id="app-short-intro">
        <div className="app-short-intro-catchy">
          <span>Easy and quick access </span>
          <span>to conversion rates of </span>
          <span className="green">currencies around the world! </span>
          <span>Convert on the go.</span>
        </div>
        <div className="app-short-intro-paragraph">
        Are you going to travel and need to know the
        conversion rate of the foreign currency of your
        destination to the base currency in your current
        location? Or would you like to do a conversion?
        Then go ahead and use the form on the right. And, enjoy your trip!
        </div>
        <Button className="app-short-intro-button" text="Start now" />
      </div>
    </section>
  );
};

export default AppInfo;
