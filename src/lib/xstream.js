import xs from 'xstream'

export const first = ins => ins.map(([item]) => item)

export const scan = (...args) => ins => ins.fold(...args).drop(1)

export const split = (fn) => ins => {
	const match_ = ins.filter(fn)
	const miss_ = ins.filter(v => !fn(v))

	return [match_, miss_]
}

export const toObj = (...props) => ins => {
	const builderFromProp = prop => val =>
		prop instanceof Function ? prop(val) : {[prop]: val}

	return ins.map(vals =>
		props
			.map(builderFromProp)
			.reduce((obj, builder, i) => ({...obj, ...builder(vals[i])}), {}))
}

export const toObjBase = (...props) => toObj(base => base, ...props)