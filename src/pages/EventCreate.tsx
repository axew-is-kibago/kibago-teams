import Header from '../components/Header';
import { TextareaHTMLAttributes, useState } from 'react';
import { auth } from '../firebase.ts';
import { useNavigate } from 'react-router-dom';

export const EventCreate = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string>('');
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

  const handleChangeOverview = (e: React.ChangeEvent<any>) => {
    setOverview(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen pt-[100px]">
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="title" className='text-[30px]'>イベント名</label>
              <input
                id="title"
                name="title"
                value={title}
                onChange={handleChangeTitle}
                className='border border-black text-[40px] py-2'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="representative" className='text-[30px]'>代表者</label>
              <input
                id="representative"
                name="representative"
                value={representative}
                onChange={handleChangePassword}
                type="representative"
                className='border border-black text-[40px] py-2'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="location" className='text-[30px]'>場所</label>
              <input
                id="location"
                name="location"
                value={location}
                onChange={handleChangeLocation}
                type="location"
                className='border border-black text-[40px] py-2'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="date" className='text-[30px]'>日程</label>
              <input
                id="date"
                name="date"
                value={date}
                onChange={handleChangeDate}
                type="date"
                className='border border-black text-[40px] py-2'
              />
            </div>
            <div className='flex flex-col w-1/2 pb-5'>
              <label htmlFor="overview" className='text-[30px]'>概要</label>
              <textarea
                id="overview"
                name="overview"
                value={overview}
                onChange={handleChangeOverview}
                className='border border-black text-[40px] h-[300px]'
              />
            </div>
          </div>
          <button type="submit" className='bg-sky-400 hover:bg-sky-300 text-[30px] px-5 py-2 fixed bottom-3 right-3 z-0'>作成</button>
        </form>
      </div>
    </>
  );
  };

