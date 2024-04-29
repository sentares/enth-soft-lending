import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import { MdNetworkCheck } from 'react-icons/md'
import { FaDatabase } from 'react-icons/fa6'
import { CgWebsite } from 'react-icons/cg'
import { FaEarthAmericas } from 'react-icons/fa6'

import corpcommentImg from '@/public/1.png'
import rmtdevImg from '@/public/2.png'
import wordanalyticsImg from '@/public/4.png'
import { title } from 'process'
import { hostsDataTypes } from './dataType'

export const links = [
	{
		name: 'Главная',
		hash: '#home',
	},
	{
		name: 'Услуги',
		hash: '#skills',
	},

	{
		name: 'Приложение',
		hash: '#projects',
	},

	{
		name: 'Тарифы',
		hash: '#hosts',
	},
	{
		name: 'Связаться',
		hash: '#contact',
	},
] as const

export const experiencesData = [
	{
		title: 'Виртуальный хостинг',
		location: '',
		description:
			'Создавайте и размещайте сайты любой сложности — от простых визиток до большихмагазинов на 1С-Битрикс',
		icon: React.createElement(MdNetworkCheck),
		date: '',
	},
	{
		title: 'Аренда VDS и VPS',
		location: '',
		description:
			'Виртуальные серверы с почасовой оплатой.Меняйте конфигурацию сервера в любой момент и в пару кликов',
		icon: React.createElement(CgWorkAlt),
		date: '',
	},
	{
		title: 'Выделенные серверы',
		location: '',
		description:
			'Аренда физических серверов любых конфигураций — готовые сборки или под заказ',
		icon: React.createElement(FaDatabase),
		date: '',
	},
	{
		title: 'Лендинги и сайты',
		location: '',
		description: 'Закажите разработку сайта любой сложности под ключ',
		icon: React.createElement(CgWebsite),
		date: '',
	},
	{
		title: 'Регистрация доменов',
		location: '',
		description:
			'Более 350 доменных зон. Лучшие цены на регистрацию и продление',
		icon: React.createElement(FaEarthAmericas),
		date: '',
	},
] as const

export const projectsData = [
	{
		title: 'Подключайте новые тарифы с помощью приложения',
		description: 'Откройте новые возможности в пару кликов',
		tags: ['', 'IOS', 'Android', 'Удобство', 'Скорость', 'Поддержка'],
		imageUrl: corpcommentImg,
	},
	{
		title: 'Права доступа',
		description:
			'Нужно дать доступ к сайту разработчику? Создайте для него аккаунт с ограниченными правами',
		tags: ['', 'Аккаунты', 'Статистика', 'Аналитика'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Удобный интерфейс для управления вашим тарифом',
		description: 'Настраивайте тарифы под себя',
		tags: ['', 'Управление аккаунтом', 'Продукты', 'Настройка', 'Админ панель'],
		imageUrl: wordanalyticsImg,
	},
] as const

export const skillsData = [
	'Бесплатная почта',
	'Поддержка 24/7',
	'Права доступа',
	'Простой файловый менеджер',
	'Бесплатный SSL-сертификат',
	'Админка в приложении',
	'Мониторинг производительности',
] as const

export const hostsData: hostsDataTypes[] = [
	{
		id: 1,
		name: 'Year+',
		title: 'Идеальное решение для сайта-визитки',
		month: '255',
		year: '196',
		clients_best: false,
		sites: '1 сайт',
		NVM: '10 ',
		db: '1 база данных',
		ssl: 'Бесплатный',
		mail_qvot: '10 ГБ',
		mail_box: 'Неограниченное',
	},
	{
		id: 2,
		name: 'Optimo+',
		title: 'Выбор популярных блогеров и сайтов-галерей',
		month: '370',
		year: '274',
		clients_best: false,
		sites: '10 сайтов',
		NVM: '30 ',
		db: 'Безлимитные базы данных',
		mail_box: '10 ГБ',
		mail_qvot: 'Неограниченное',
		ssl: 'Бесплатный',
	},
	{
		id: 3,
		name: 'Century+',
		title: 'Наилучший вариант для сайта вашей компании',
		month: '497',
		year: '397',
		clients_best: true,
		sites: '25 сайтов',
		NVM: '40 ',
		db: 'Безлимитные базы данных',
		mail_box: '10 ГБ',
		mail_qvot: 'Неограниченное',
		ssl: 'Бесплатный',
	},
	{
		id: 4,
		name: 'Millennium+',
		title: 'Продвинутое решение для крупных e-commerce проектов',
		month: '746',
		year: '598',
		clients_best: false,
		sites: '50 сайтов',
		NVM: '50 ',
		db: 'Безлимитные базы данных',
		mail_box: '10 ГБ',
		mail_qvot: 'Неограниченное',
		ssl: 'Бесплатный',
	},
] as const
