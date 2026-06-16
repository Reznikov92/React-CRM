interface CustomNotificationProps{
title:string,
message:string,
onClick():void,
onDismiss():void,
}

export function CustomNotification(props:CustomNotificationProps) {
    const {message,onClick,onDismiss,title} = props

  return (
    <div onClick={onClick}>
        <div>
            <strong>{title}</strong>
            <button onClick={onDismiss}>Закрыть</button>
        <p>{message}</p>
        </div>
    </div>
  )
}
