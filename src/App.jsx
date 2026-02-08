import React from 'react'
import AddItemForm from './components/AddItemForm'
import GetItem from './components/GetItem'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Item Manager</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6">
        <AddItemForm />
        <GetItem />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000, // global default: 4 seconds
          success: {
            style: {
              background: '#10B981', // Tailwind green-500
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#EF4444', // Tailwind red-500
              color: '#fff',
            },
          },
        }}
      />
    </div>
  )
}

export default App