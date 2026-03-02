import { useState } from 'react'

export default function FormComponent({ title, fields = [], onSubmit }) {
  const [formData, setFormData] = useState({})

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <div className="card">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field, index) => (
          <div key={index}>
            {field.label && (
              <label className="block text-sm text-slate-400 mb-1">{field.label}</label>
            )}
            {field.type === 'select' ? (
              <select
                className="input w-full"
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                {(field.options || []).map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                className="input w-full min-h-[100px]"
                placeholder={field.placeholder}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : (
              <input
                type={field.type || 'text'}
                className="input w-full"
                placeholder={field.placeholder}
                defaultValue={field.value}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
