import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none w-full h-full'>
      <Image
        src={'/avatar.png'}
        width={737}
        height={678}
        alt='Developer Avatar'
        className='translate-z-0 w-full h-full max-w-full object-contain'
        style={{ width: '100%', height: '100%' }}
        unoptimized={false}
        priority={true}
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAB/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIABBFRAzKR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/AAqy02qPxOCbDjKHR9h5GCRNXtLJ3Ecqcb//2Q=="
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 737px"
      />
    </div>
  );
};

export default Avatar;
