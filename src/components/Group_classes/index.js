import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Group_classes = ({ data }) => (
  <div>
    {data.map(classes => (
      <div key={classes.group_name} className='column' style={{ border: '1px solid #eaecee' }}>
        <section className='section'>
          <h4 className='has-text-centered has-text-weight-semibold'>
            {classes.group_name}
          </h4>
          <table >
            <tbody>
              <tr>
                <th>zajęcia</th>
                <th>termin</th>
                <th>prowadzący</th>
              </tr>
              {classes.items.map((item, index) => (
                <Fragment key={index}><tr key={index}>
                  <td rowSpan='2' className='is-size-5 classes_name'>{item.classes}</td>
                  <td> {item.class_time1}</td>
                  <td rowSpan='2' className='classes_teacher'>{item.class_teacher}</td>
                </tr><tr key={index}><td>{item.class_time2}</td>
                </tr></Fragment>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    ))}
  </div>
)

Group_classes.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Group_classes
