import toast from 'react-hot-toast';
import copyImg from '../../assets/images/copy.svg';

import { RoomCodeStyled } from './styles';

type RoomCodeProps = {
  code: string;
}

export function RoomCode({ code }: RoomCodeProps): JSX.Element {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);

    toast.success('Room code copied', {
      position: 'top-right',
    });
  }

  return (
    <RoomCodeStyled
      type="button"
      onClick={copyRoomCodeToClipboard}
      className="room-code"
    >
      <div>
        <img src={copyImg} alt="" />
      </div>
      <span>
        Sala #
        {code}
      </span>
    </RoomCodeStyled>
  );
}
