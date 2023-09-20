import Header from '../components/Header'
import { useState } from 'react';


export const EventCreate = () => {
  const [title, setTitle] = useState<string>('');
  const [representative, setRepresentative] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [overview, setOverview] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      title,
      representative,
      location,
      date,
      overview,
    });
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepresentative(e.target.value);
  };
  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const handleChangeOverview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOverview(e.target.value);
  };
  return (
    <>
      <Header />
      <div className="pt-[100px]">
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">イベント名</label>
            <input
              id="title"
              name="title"
              value={title}
              onChange={handleChangeTitle}
            />
          </div>
          <div>
            <label htmlFor="representative">代表者</label>
            <input
              id="representative"
              name="representative"
              value={representative}
              onChange={handleChangePassword}
              type="representative"
            />
          </div>
          <div>
            <label htmlFor="location">場所</label>
            <input
              id="location"
              name="location"
              value={location}
              onChange={handleChangeLocation}
              type="location"
            />
          </div>
          <div>
            <label htmlFor="date">日程</label>
            <input
              id="date"
              name="date"
              value={date}
              onChange={handleChangeDate}
              type="date"
            />
          </div>
          <div>
            <label htmlFor="overview">概要</label>
            <input
              id="overview"
              name="overview"
              value={overview}
              onChange={handleChangeOverview}
              type="overview"
            />
          </div>
          <div>
            <button type="submit">作成</button>
          </div>
        </form>
      </div>
    </>
  );
  };

