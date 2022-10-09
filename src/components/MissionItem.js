import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMissions } from '../redux/missions/missions';

const MissionItem = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(joinMissions({ id: e.target.id }));
  };

  return (
    <tr className="mission-item">
      <td className="mission-name">{mission.mission_name}</td>
      <td className="mission-desc">
        {mission.description}
        <span><a href={mission.more}>See more.</a></span>
      </td>
      <td className="t-align-center">
        {!mission.status && <span className="active-badge">NOT A MEMBER</span>}
        {mission.status && <span className="inactive-badge">Active Member</span>}
      </td>
      <td className="t-align-center">
        {!mission.status && <button id={mission.mission_id} onClick={handleClick} className="join-btn" type="button">Join Mission</button> }
        {mission.status && <button id={mission.mission_id} onClick={handleClick} className="leave-btn" type="button">Leave Mission</button>}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.bool,
    mission_id: PropTypes.string,
    more: PropTypes.string,
  }).isRequired,
};

export default MissionItem;
