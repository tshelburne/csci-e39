import React from 'react'

const ColorMapper = ({effects, children, ...props}) => {
    const values = effects.split(' ')
    return (
        <section {...props} className="color-mapper">
            {React.Children.map(children, (child, idx) => {
                let val = idx
                while (val >= values.length) val -= values.length
                return (
                    <div
                        key={`multiple-${idx}`}
                        className="color-mapper-item"
                        style={{
                            '--mult-effect': values[val]
                        }}
                    >
                        {child}
                    </div>
                )
            })}
        </section>
    )
}

export default ColorMapper
