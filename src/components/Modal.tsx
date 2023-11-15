type modalProps = {
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>> 
}

const Modal = ({ modal, setModal }: modalProps) => {
  if (!modal) return <></>;

  return (
    <div
      onClick={() => setModal(!modal)}
      className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-96 flex-col gap-4 rounded-md bg-slate-100 p-8"
      >
        <h1 className="text-center text-2xl">Add a Word</h1>
        <select name="" id="" className='rounded-md border border-black px-2 py-1'>
          <option value="">ID - EN</option>
          <option value="">EN - ID</option>
        </select>
        <input
          type="text"
          placeholder="Kata Baru"
          className="rounded-md border border-black px-2 py-1"
        />
        <input
          type="text"
          placeholder="Translasi"
          className="rounded-md border border-black px-2 py-1"
        />
        <button className="bg-zinc-800 px-4 py-1 rounded-md text-slate-100">Add</button>
      </div>
    </div>
  )
}

export default Modal;
