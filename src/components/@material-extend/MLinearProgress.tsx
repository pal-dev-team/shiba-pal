import { darken, lighten, useTheme } from '@material-ui/core/styles';
import { LinearProgress, LinearProgressProps } from '@material-ui/core';

// ----------------------------------------------------------------------

declare module '@material-ui/core' {
  interface LinearProgressPropsColorOverrides {
    info: true;
    success: true;
    warning: true;
    error: true;
  }
}

export default function MLinearProgress({ color = 'primary', sx, ...other }: LinearProgressProps) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const gradientDashed = (color: string) => {
    const getColor = isLight ? lighten(color, 0.62) : darken(color, 0.5);
    return `radial-gradient(${getColor} 0%, ${getColor}  16%, transparent 42%)`;
  };

  if (color === 'inherit' || color === 'primary' || color === 'secondary') {
    return <LinearProgress color={color} sx={sx} {...other} />;
  }

  return (
    <LinearProgress
      sx={{
        '& .MuiLinearProgress-bar': {
          bgcolor: theme.palette[color].main
        },
        '& .MuiLinearProgress-dashed': {
          backgroundImage: gradientDashed(theme.palette[color].main)
        },
        '&.MuiLinearProgress-indeterminate, &.MuiLinearProgress-determinate, & .MuiLinearProgress-bar2Buffer, &.MuiLinearProgress-query': {
          bgcolor: isLight ? theme.palette[color].lighter : theme.palette[color].darker
        },
        ...sx
      }}
      {...other}
    />
  );
}
