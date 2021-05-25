//
import { MAvatar } from './@material-extend';
import { MAvatarProps } from './@material-extend/MAvatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }: MAvatarProps) {

    return (
        <MAvatar
            src="https://res.cloudinary.com/trinhmai/image/upload/v1611413211/upload_minimal/avatar/minimal_avatar.jpg"
            alt="Mark"
            color='default'
            {...other}
        >
            Phuwanart
        </MAvatar>
    );
}
