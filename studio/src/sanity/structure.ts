import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Adam Danielsson')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('project').title('Projects'),
      S.divider(),
      S.documentTypeListItem('navigation').title('Navigation'),
      S.documentTypeListItem('siteConfig').title('Site Settings'),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['post', 'category', 'author', 'page', 'project', 'navigation', 'siteConfig'].includes(
            item.getId()!,
          ),
      ),
    ])
