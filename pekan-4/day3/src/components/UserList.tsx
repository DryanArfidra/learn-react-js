import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../app/store'
import { fetchUsers, removeUser } from '../features/users/usersSlice'

export default function UserList() {
  const { users, status, error } = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  const handleRefresh = () => {
    dispatch(fetchUsers())
  }

  const handleRemoveUser = (id: number) => {
    dispatch(removeUser(id))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Users List</h2>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Refresh
        </button>
      </div>

      {status === 'loading' && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Loading users...</p>
        </div>
      )}

      {status === 'failed' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      )}

      {status === 'succeeded' && (
        <div className="space-y-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">{user.phone}</p>
              </div>
              <button
                onClick={() => handleRemoveUser(user.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}