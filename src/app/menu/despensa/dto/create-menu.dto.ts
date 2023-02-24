export class CreateMenuDto {
  department: string;
  url: string;
  categories: Array<CategoriesDto>;
}

export class CategoriesDto {
  name: string;
  url: string;
  subCategories: Array<SubCategoriesDto>;
}

export class SubCategoriesDto {
  name: string;
  url: string;
}
