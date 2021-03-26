export function RepositoryItem({repository}) {
    return (
        <li>
            <strong>{repository?.name ?? 'default'}</strong>
            <p>{repository?.description ?? 'default'}</p>
            <a href={repository?.html_url} target="_blank">Acessar repositório</a>
        </li>
    );
}