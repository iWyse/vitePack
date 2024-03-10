import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'

var slider = document.getElementById('slider-round')

function mergeTooltips(slider, threshold, separator) {
    var textIsRtl = getComputedStyle(slider).direction === 'rtl'
    var isRtl = slider.noUiSlider.options.direction === 'rtl'
    var isVertical = slider.noUiSlider.options.orientation === 'vertical'
    var tooltips = slider.noUiSlider.getTooltips()
    var origins = slider.noUiSlider.getOrigins()

    tooltips.forEach(function (tooltip, index) {
        if (tooltip) {
            origins[index].appendChild(tooltip)
        }
    })

    slider.noUiSlider.on('update', function (values, handle, unencoded, tap, positions) {
        var pools = [[]]
        var poolPositions = [[]]
        var poolValues = [[]]
        var atPool = 0

        if (tooltips[0]) {
            pools[0][0] = 0
            poolPositions[0][0] = positions[0]
            poolValues[0][0] = values[0]
        }

        for (var i = 1; i < positions.length; i++) {
            if (!tooltips[i] || positions[i] - positions[i - 1] > threshold) {
                atPool++
                pools[atPool] = []
                poolValues[atPool] = []
                poolPositions[atPool] = []
            }

            if (tooltips[i]) {
                pools[atPool].push(i)
                poolValues[atPool].push(values[i])
                poolPositions[atPool].push(positions[i])
            }
        }

        pools.forEach(function (pool, poolIndex) {
            var handlesInPool = pool.length

            for (var j = 0; j < handlesInPool; j++) {
                var handleNumber = pool[j]

                if (j === handlesInPool - 1) {
                    var offset = 0

                    poolPositions[poolIndex].forEach(function (value) {
                        offset += 1000 - value
                    })

                    var direction = isVertical ? 'bottom' : 'right'
                    var last = isRtl ? 0 : handlesInPool - 1
                    var lastOffset = 1000 - poolPositions[poolIndex][last]
                    offset = (textIsRtl && !isVertical ? 100 : 0) + offset / handlesInPool - lastOffset

                    // Center this tooltip over the affected handles
                    tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator)
                    tooltips[handleNumber].style.display = 'block'
                    tooltips[handleNumber].style[direction] = offset + '%'
                } else {
                    // Hide this tooltip
                    tooltips[handleNumber].style.display = 'none'
                }
            }
        })
    })
}

noUiSlider.create(slider, {
    start: [0, 8000],
    connect: true,
    tooltips: [true, true],
    range: {
        min: 0,
        max: 12200,
    },
})

mergeTooltips(slider, 15, ' - ')

slider.noUiSlider.on('update.one', function () {
    let arrNumbers = slider.noUiSlider.get()
    console.log(arrNumbers)
})
