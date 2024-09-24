function AlbumItem({ image, desc, id, name }) {
  return (
    <div className="min-w-[180px] hover:bg-slate-500 bg-gray-800 p-2 px-3 rounded cursor-pointer">
      <img className="rounded" src={image} alt="photo album" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
}

export default AlbumItem;