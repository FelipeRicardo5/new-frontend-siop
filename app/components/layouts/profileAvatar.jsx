export default function ProfileAvatar({ src, alt = "Profile", size = 100 }) {
    return (
      <div
        className="relative inline-block"
        style={{ width: size, height: size }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full border-2 border-gray-300"
        />
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-1 border-white animate-ping rounded-full"></span>
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-1 border-white rounded-full"></span>
      </div>
    );
  }
  