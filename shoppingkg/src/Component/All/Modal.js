import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { likechangeReset, modalchange } from '../../redux/homeRedux'
import Stars from '../Stars'
import { FaShoppingCart } from 'react-icons/fa'
import { MdDeleteSweep } from 'react-icons/md'


export default function ModalFunc() {
    const { modalopen, modalValue } = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const cancelButtonRef = useRef(null) ///modal cancel value
    // //////////////////////reset like modalll
    const resetLikefun=(id)=>{
        dispatch(likechangeReset(id))
        dispatch(modalchange())
      
    }
    return (
        <Transition.Root show={modalopen} as={Fragment}>
            <Dialog as="div" className="relative z-10 " initialFocus={cancelButtonRef} onClose={() => dispatch(modalchange())}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto pt-11">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="grid grid-cols-1">
                                        {
                                            modalValue.map((x, i) => (
                                                <div key={x.id} className="border relative my-1 bg-bg2  rounded-lg px-2 py-5 justify-center items-center grid grid-cols-1">
                                                    <img src={x.image} alt="" className='lg:h-[150px] h-[100px] w-auto mx-auto mix-blend-multiply ' />
                                                    <h5 className='text-grey1 lg:my-3 text-sm lg:text-xl'>{x.title ? x.title.slice(0, 20) : ''}</h5>
                                                    {<Stars />}
                                                    <span className='bg-slate-200 w-[max-content] rounded-lg px-2 lg:my-3 my-1'>{parseInt(x.price / 12 * 10) / 10}$ dan / 12oy</span>
                                                    <div className="flex justify-between">
                                                        <h3 className=' my-1 text-2xl'>{x.price}$ </h3>
                                                        <button onClick={() =>resetLikefun(x.id)} className={`   border absolute top-1 right-1 bg-bg2 border-bg1 rounded-full lg:text-2xl py-2  hover:text-red-600`}>{ <MdDeleteSweep  className='text-red-500' />}</button>
                                                        <button className='border border-yellow rounded-lg px-6 bg-yellow  hover:text-green'><FaShoppingCart /></button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => dispatch(modalchange())}
                                    >
                                        Deactivate
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => dispatch(modalchange())}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
