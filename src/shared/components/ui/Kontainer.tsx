
enum IBorderSide{
  't', 
  'b',
  'l',
  'r',
}

interface KontainerProps {
  borderSide?: IBorderSide;
  backgroundColor?: string;
  borderColor?: string  
  children?: React.ReactNode;
}

export function Kontainer(props: KontainerProps) {
  return <div className={getClassName(props)}>{props.children}</div>;
}

function getClassName(arg: KontainerProps) : string {
  
  const bg = arg.backgroundColor ?? 'bg-linear-30 from-[#082727] to-[#225958]'
  const baseStyle = `p-4 border-${arg.borderSide} border-${arg.borderSide}-[#48CBCA] flex items-center justify-center`
  return bg + ' ' + baseStyle;
}