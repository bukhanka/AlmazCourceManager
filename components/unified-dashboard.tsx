'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BellIcon, ChevronDownIcon, SearchIcon, EditIcon, TrashIcon, DownloadIcon, PlusIcon } from "lucide-react"

export function UnifiedDashboardComponent() {
  const [selectedMenu, setSelectedMenu] = useState('corrections')

  const correctionsData = [
    { id: 1, status: "Завершено", message: "Корректировка выполнена", lastUpdated: "2024-01-05", updatedBy: "Фамилия 1" },
    { id: 2, status: "Ожидает корректировку", message: "Сотрудник Фамилия 2 на больничном", lastUpdated: "2024-01-10", updatedBy: "Фамилия 3" },
    { id: 3, status: "В работе", message: "Направлена служебная записка на сотрудника Фамилия 4", lastUpdated: "2024-01-12", updatedBy: "Фамилия 5" },
    { id: 4, status: "В работе", message: "Сотруднику Фамилия 6 необходимо поставить обучение", lastUpdated: "2024-01-15", updatedBy: "Фамилия 7" },
    { id: 5, status: "Завершено", message: "Корректировка утверждена", lastUpdated: "2024-01-18", updatedBy: "Фамилия 8" },
    { id: 6, status: "Ожидает корректировку", message: "Сотрудник Фамилия 9 на больничном", lastUpdated: "2024-01-20", updatedBy: "Фамилия 10" },
  ]

  const scheduleData = [
    { id: 1, name: "Фамилия 1", employeeId: "14", position: "Старший мастер", schedule: [
      {date: 1, hours: 11.5, type: "day"}, {date: 2, hours: 11.5, type: "day"}, {date: 3, hours: 11.5, type: "day"},
      {date: 4, hours: 8, type: "day"}, {date: 5, hours: 0, type: "off"}, {date: 6, hours: 0, type: "off"},
      {date: 7, hours: 0, type: "off"}, {date: 8, hours: 11.5, type: "day"}, {date: 9, hours: 11.5, type: "day"},
      {date: 10, hours: 11.5, type: "day"}, {date: 11, hours: 11.5, type: "day"}
    ]},
    { id: 2, name: "Фамилия 2", employeeId: "48", position: "Мастер", schedule: [
      {date: 1, hours: 11.5, type: "day"}, {date: 2, hours: 11.5, type: "day"}, {date: 3, hours: 11.5, type: "day"},
      {date: 4, hours: 8, type: "day"}, {date: 5, hours: 0, type: "off"}, {date: 6, hours: 0, type: "off"},
      {date: 7, hours: 0, type: "off"}, {date: 8, hours: 11.5, type: "day"}, {date: 9, hours: 11.5, type: "day"},
      {date: 10, hours: 11.5, type: "day"}, {date: 11, hours: 11.5, type: "day"}
    ]},
    { id: 3, name: "Фамилия 3", employeeId: "15", position: "Слесарь мастер", schedule: [
      {date: 1, hours: 0, type: "off"}, {date: 2, hours: 0, type: "off"}, {date: 3, hours: 0, type: "off"},
      {date: 4, hours: 11.5, type: "day"}, {date: 5, hours: 11.5, type: "day"}, {date: 6, hours: 11.5, type: "day"},
      {date: 7, hours: 11.5, type: "day"}, {date: 8, hours: 8, type: "day"}, {date: 9, hours: 0, type: "off"},
      {date: 10, hours: 0, type: "off"}, {date: 11, hours: 0, type: "off"}
    ]},
    { id: 4, name: "Фамилия 4", employeeId: "21", position: "Слесарь мастер", schedule: [
      {date: 1, hours: 11.5, type: "night"}, {date: 2, hours: 11.5, type: "night"}, {date: 3, hours: 11.5, type: "night"},
      {date: 4, hours: 8, type: "night"}, {date: 5, hours: 0, type: "off"}, {date: 6, hours: 0, type: "off"},
      {date: 7, hours: 0, type: "off"}, {date: 8, hours: 11.5, type: "night"}, {date: 9, hours: 11.5, type: "night"},
      {date: 10, hours: 11.5, type: "night"}, {date: 11, hours: 11.5, type: "night"}
    ]},
    { id: 5, name: "Фамилия 5", employeeId: "25", position: "Слесарь мастер", schedule: [
      {date: 1, hours: 11.5, type: "night"}, {date: 2, hours: 11.5, type: "night"}, {date: 3, hours: 11.5, type: "night"},
      {date: 4, hours: 8, type: "night"}, {date: 5, hours: 0, type: "off"}, {date: 6, hours: 0, type: "off"},
      {date: 7, hours: 0, type: "off"}, {date: 8, hours: 11.5, type: "night"}, {date: 9, hours: 11.5, type: "night"},
      {date: 10, hours: 11.5, type: "night"}, {date: 11, hours: 11.5, type: "night"}
    ]},
    { id: 6, name: "Фамилия 6", employeeId: "31", position: "Слесарь мастер", schedule: [
      {date: 1, hours: 11.5, type: "day"}, {date: 2, hours: 11.5, type: "day"}, {date: 3, hours: 11.5, type: "day"},
      {date: 4, hours: 11.5, type: "day"}, {date: 5, hours: 11.5, type: "day"}, {date: 6, hours: 11.5, type: "day"},
      {date: 7, hours: 8, type: "day"}, {date: 8, hours: 0, type: "off"}, {date: 9, hours: 0, type: "off"},
      {date: 10, hours: 0, type: "off"}, {date: 11, hours: 11.5, type: "day"}
    ]},
    { id: 7, name: "Фамилия 7", employeeId: "35", position: "Мастер", schedule: [
      {date: 1, hours: 0, type: "off"}, {date: 2, hours: 11.5, type: "day"}, {date: 3, hours: 11.5, type: "day"},
      {date: 4, hours: 11.5, type: "day"}, {date: 5, hours: 11.5, type: "day"}, {date: 6, hours: 8, type: "day"},
      {date: 7, hours: 0, type: "off"}, {date: 8, hours: 0, type: "off"}, {date: 9, hours: 11.5, type: "day"},
      {date: 10, hours: 11.5, type: "day"}, {date: 11, hours: 11.5, type: "day"}
    ]},
    { id: 8, name: "Фамилия 8", employeeId: "42", position: "Старший мастер", schedule: [
      {date: 1, hours: 11.5, type: "day"}, {date: 2, hours: 11.5, type: "day"}, {date: 3, hours: 11.5, type: "day"},
      {date: 4, hours: 8, type: "day"}, {date: 5, hours: 0, type: "off"}, {date: 6, hours: 0, type: "off"},
      {date: 7, hours: 0, type: "off"}, {date: 8, hours: 11.5, type: "day"}, {date: 9, hours: 11.5, type: "day"},
      {date: 10, hours: 11.5, type: "day"}, {date: 11, hours: 11.5, type: "day"}
    ]},
    { id: 9, name: "Фамилия 9", employeeId: "50", position: "Слесарь мастер", schedule: [
      {date: 1, hours: 0, type: "off"}, {date: 2, hours: 0, type: "off"}, {date: 3, hours: 11.5, type: "night"},
      {date: 4, hours: 11.5, type: "night"}, {date: 5, hours: 11.5, type: "night"}, {date: 6, hours: 11.5, type: "night"},
      {date: 7, hours: 8, type: "night"}, {date: 8, hours: 0, type: "off"}, {date: 9, hours: 0, type: "off"},
      {date: 10, hours: 11.5, type: "night"}, {date: 11, hours: 11.5, type: "night"}
    ]},
    { id: 10, name: "Фамилия 10", employeeId: "55", position: "Мастер", schedule: [
      {date: 1, hours: 11.5, type: "day"}, {date: 2, hours: 11.5, type: "day"}, {date: 3, hours: 11.5, type: "day"},
      {date: 4, hours: 8, type: "day"}, {date: 5, hours: 0, type: "off"}, {date: 6, hours: 0, type: "off"},
      {date: 7, hours: 0, type: "off"}, {date: 8, hours: 11.5, type: "day"}, {date: 9, hours: 11.5, type: "day"},
      {date: 10, hours: 11.5, type: "day"}, {date: 11, hours: 11.5, type: "day"}
    ]},
    { id: 11, name: "Фамилия 11", employeeId: "60", position: "Слесарь мастер", schedule: [
      {date: 1, hours: 11.5, type: "night"}, {date: 2, hours: 11.5, type: "night"}, {date: 3, hours: 11.5, type: "night"},
      {date: 4, hours: 8, type: "night"}, {date: 5, hours: 0, type: "off"}, {date: 6, hours: 0, type: "off"},
      {date: 7, hours: 0, type: "off"}, {date: 8, hours: 11.5, type: "night"}, {date: 9, hours: 11.5, type: "night"},
      {date: 10, hours: 11.5, type: "night"}, {date: 11, hours: 11.5, type: "night"}
    ]}
  ]

  const reportsData = [
    { id: 1, name: "Ежемесячный отчет по продажам", date: "01.05.2023", department: "Отдел продаж", status: "Готов", author: "Фамилия 12", lastModified: "30.04.2023" },
    { id: 2, name: "Квартальный финансовый отчет", date: "15.04.2023", department: "Бухгалтерия", status: "В обработке", author: "Фамилия 13", lastModified: "14.04.2023" },
    { id: 3, name: "Отчет по эффективности маркетинговых кампаний", date: "10.05.2023", department: "Отдел маркетинга", status: "Готов", author: "Фамилия 14", lastModified: "09.05.2023" },
    { id: 4, name: "Отчет по текучести кадров", date: "05.05.2023", department: "Отдел кадров", status: "Готов", author: "Фамилия 15", lastModified: "04.05.2023" },
    { id: 5, name: "Отчет по завершенным проектам", date: "20.04.2023", department: "Отдел разработки", status: "На проверке", author: "Фамилия 16", lastModified: "19.04.2023" },
  ]

  const trainingData = [
    { id: 1, name: "Введение в бережливое производство", date: "15.05.2023", time: "10:00 - 12:00", department: "Все подразделения", type: "Обязательное", instructor: "Фамилия 17", location: "Конференц-зал A" },
    { id: 2, name: "Техника безопасности на рабочем месте", date: "17.05.2023", time: "14:00 - 16:00", department: "Отдел разработки", type: "Обязательное", instructor: "Фамилия 18", location: "Учебный класс 2" },
    { id: 3, name: "Эффективные продажи", date: "20.05.2023", time: "11:00 - 13:00", department: "Отдел продаж", type: "Рекомендуемое", instructor: "Фамилия 19", location: "Конференц-зал B" },
    { id: 4, name: "Управление проектами", date: "22.05.2023", time: "09:00 - 17:00", department: "Руководители отделов", type: "Обязательное", instructor: "Фамилия 20", location: "Учебный центр" },
    { id: 5, name: "Основы финансовой грамотности", date: "25.05.2023", time: "13:00 - 15:00", department: "Все подразделения", type: "Рекомендуемое", instructor: "Фамилия 21", location: "Конференц-зал A" },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-md">
        <div className="flex items-center mb-8">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span className="ml-2 text-xl font-bold text-blue-600">CEBEPAAMAZ</span>
        </div>
        <nav>
          <div className="flex items-center mb-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <div className="text-sm font-medium">Ульяна</div>
              <div className="text-xs text-gray-500">Методист 1 класса</div>
            </div>
          </div>
          <ul className="space-y-2">
            {[
              { id: 'corrections', name: 'Корректировки', icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' },
              { id: 'schedule', name: 'Расписание подразделений', icon: 'M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm16 0H5v14h14V4zM16 2v4M8 2v4M3 10h18' },
              { id: 'reports', name: 'Отчёты', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8' },
              { id: 'training', name: 'График обучения', icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' },
            ].map((item) => (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${selectedMenu === item.id ? 'bg-gray-100' : ''}`}
                  onClick={() => setSelectedMenu(item.id)}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={item.icon} />
                  </svg>
                  {item.name}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-8" placeholder="Поиск ..." aria-label="Search" />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <BellIcon className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <span>Ульяна</span>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </header>

        {selectedMenu === 'corrections' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Корректировки</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead>Номер подразделения</TableHead>
                  <TableHead>Статус редакции</TableHead>
                  <TableHead>Руководитель подразделения</TableHead>
                  <TableHead>Сообщение</TableHead>
                  <TableHead>Последнее обновление</TableHead>
                  <TableHead>Обновил</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {correctionsData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <input type="checkbox" className="rounded border-gray-300" aria-label={`Select row ${row.id}`} />
                    </TableCell>
                    <TableCell>Подразделение 1</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          row.status === "Завершено"
                            ? "bg-green-100 text-green-800"
                            : row.status === "Ожидает корректировку"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell>Фамилия 5</TableCell>
                    <TableCell>{row.message}</TableCell>
                    <TableCell>{row.lastUpdated}</TableCell>
                    <TableCell>{row.updatedBy}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" aria-label="Edit">
                        <EditIcon className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" aria-label="Delete">
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {selectedMenu === 'schedule' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Расписание подразделений</h1>
              <Button>
                <EditIcon className="h-4 w-4 mr-2" />
                Редактировать расписание
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Сотрудник</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Должность</TableHead>
                  {Array.from({length: 11}, (_, i) => i + 1).map(day => (
                    <TableHead key={day} className="text-center">{day}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleData.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.employeeId}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    {employee.schedule.map((day, index) => (
                      <TableCell key={index} className="text-center">
                        <div 
                          className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center
                            ${day.type === 'day' ? 'bg-green-100 text-green-800' : 
                              day.type === 'night' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                        >
                          {day.hours || '-'}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {selectedMenu === 'reports' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Отчёты</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Название отчета</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Подразделение</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Автор</TableHead>
                  <TableHead>Последнее изменение</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportsData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.department}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          row.status === "Готов"
                            ? "bg-green-100 text-green-800"
                            : row.status === "В обработке"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell>{row.author}</TableCell>
                    <TableCell>{row.lastModified}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" disabled={row.status !== "Готов"}>
                        <DownloadIcon className="h-4 w-4 mr-2" />
                        Скачать
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {selectedMenu === 'training' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">График обучения</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Название тренинга</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Время</TableHead>
                  <TableHead>Подразделение</TableHead>
                  <TableHead>Тип</TableHead>
                  <TableHead>Инструктор</TableHead>
                  <TableHead>Место проведения</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trainingData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.time}</TableCell>
                    <TableCell>{row.department}</TableCell>
                    <TableCell>
                      <Badge variant={row.type === "Обязательное" ? "destructive" : "secondary"}>
                        {row.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{row.instructor}</TableCell>
                    <TableCell>{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  )
}