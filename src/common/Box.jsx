export default function Box({ text }) {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <p>{text}</p>
      <img src="/public/svg/indonesia.png" alt="image" />
    </div>
  );
}
